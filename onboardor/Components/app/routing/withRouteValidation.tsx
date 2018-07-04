import { HttpError } from "found";
import { Route } from "../../types/index";

const withRouteValidation = (route: Route) =>
  (render: (route: Route) => React.ComponentType) => {
  if (route.error) {
    if (route.error._error) {
      throw new HttpError("400", route.error._error[0]);
    } else {
      throw new HttpError("500");
    }
  }
  return render(route);
};

export default withRouteValidation;
