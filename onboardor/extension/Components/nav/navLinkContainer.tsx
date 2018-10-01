import { compose, withHandlers } from "recompose";
import oAuthNavLink from "./oAuthNavLink";
import setup from "../../../Components/setup/setupMutation";
import logErrors from "../../../Components/shared/logErrors";

interface IProps {
  setup: string;
}

const handlers = {
  setupOnClick: () => async () => {
    try {
      const payload = await setup({
        redirectUrl: `${location.origin}${location.pathname}%23/onboardor`
      });

      window.location.href = payload.setup.oAuthLoginUrl;
    } catch (error) {
      logErrors(error);

      throw error;
    }
  }
};

const NavLinkContainer = compose<IProps, IProps>(
  withHandlers(handlers),
)(oAuthNavLink);

export default NavLinkContainer;
