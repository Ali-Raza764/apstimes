import { createClient } from "@sanity/client";
// const token = process.env.REACT_APP_SANITY_TOKEN;
const client = createClient({
  projectId: "35c0tti1",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
  token: 'skQWQQMkiz8nhX158izUkxF343ikl1gc98Nui8XvnYjddliMljUBnfxMd0HTnaArws2qQN4vNU9xNJRTeV7XDu7V1HrvdyJyVvHbNTNgFKSbQMWlqjhBI64EsME2Gju9Yr3rpQ6uFDMcyCC4nG7S5IekFhBfBagY8bfIZ7HSQx3LxuawS9lP', ///find a way to access env..!
  ignoreBrowserTokenWarning: true,
});
export default client