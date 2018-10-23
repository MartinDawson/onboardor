import OAuthNavLink from "./oAuthNavLink";
import { compose, lifecycle, withProps, withStateHandlers } from "recompose";

const className = "onboardor-nav-link";

const stateHandlers = {
  updateSelected: () => () => {
    if (window.location.hash.includes("/onboardor")) {
      const selectedItem = document.querySelector(`.reponav-item.selected:not(.${className})`);

      if (selectedItem) {
        selectedItem.classList.remove("selected");
      }

      return { selected: true };
    } else {
      return { selected: false };
    }
  },
};

export default compose(
  withStateHandlers({
    selected: false,
  }, stateHandlers),
  lifecycle({
    componentDidMount() {
      this.props.updateSelected();

      const observer = new MutationObserver(() => {
        if (!document.getElementsByClassName(className).length) {
          this.forceUpdate();
          this.props.updateSelected();
        } else if (document.getElementsByClassName(className).length > 1) {
          const elements = document.getElementsByClassName(className);

          while (elements.length > 1) {
              const parentNode = elements[0].parentNode!;

              parentNode.removeChild(elements[0]);
          }
        }
      });

      observer.observe(document.body, {
        subtree: true,
        childList: true,
      });
    },
    componentWillReceiveProps() {
      this.props.updateSelected();
    }
  }),
  withProps({
    className,
  }),
)(OAuthNavLink);
