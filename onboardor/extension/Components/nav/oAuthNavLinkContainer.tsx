import OAuthNavLink from "./oAuthNavLink";
import { compose, lifecycle, withProps, withStateHandlers } from "recompose";
import { withRouter } from "found";
import { IMatch } from "../../../Components/types";

const id = "onboardor-nav-link";

interface IProps {
  match: IMatch;
}

interface IState {
  selected: boolean;
}

const stateHandlers = {
  updateSelected: () => (pathname: string) => {
    if (pathname.includes("/onboardor")) {
      const selectedItem = document.querySelector(`.reponav-item.selected:not([id='${id}'])`);

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
  withRouter,
  withStateHandlers({
    selected: false,
  }, stateHandlers),
  lifecycle({
    componentDidMount() {
      this.props.updateSelected(this.props.match.location.pathname);
    },
    componentWillReceiveProps(nextProps: IProps) {
      this.props.updateSelected(nextProps.match.location.pathname);
    }
  }),
  withProps({
    id,
  }),
)(OAuthNavLink);
