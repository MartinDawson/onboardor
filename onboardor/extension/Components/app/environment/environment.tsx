import {
  Environment,
  Network,
  RecordSource,
  Store,
} from "relay-runtime";
import { setEnviroment } from "relay-compose";

const fetchQuery = (operation: { text: string }, variables: any) =>
  fetch(`${process.env.APP_URL}/graphql`, {
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    method: "post",
  }).then((response) => response.json())
    .then((json) => {
      // https://github.com/facebook/relay/issues/1816
      if (json.errors) {
        return Promise.reject(json.errors);
      }

      return Promise.resolve(json);
    });

const network = Network.create(fetchQuery);
const source = new RecordSource();
const store = new Store(source);
const environment = new Environment({
  network,
  store,
});

setEnviroment(environment);

export default environment;
