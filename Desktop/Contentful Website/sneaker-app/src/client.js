import * as contentful from "contentful";

export const client = contentful.createClient({
  // space: process.env.react_space_id,
  // accessToken: process.env.react_access_token,
  space: "bq7f6an69wva",
  accessToken: "a2FikTExCIGHaoYi0Sd4x0CKrA8_Bh7_T9qDiAO9z7Y",
});
