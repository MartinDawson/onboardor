import { HttpError } from "found";
import { IRoute } from "../../types";

const withRouteValidation = (route: IRoute) =>
  (render: (route: IRoute) => React.ComponentType) => {
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
