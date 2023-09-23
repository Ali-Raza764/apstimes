import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "35c0tti1", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  useCdn: true,
  apiversion: "2021-10-21",
  token: 'skQWQQMkiz8nhX158izUkxF343ikl1gc98Nui8XvnYjddliMljUBnfxMd0HTnaArws2qQN4vNU9xNJRTeV7XDu7V1HrvdyJyVvHbNTNgFKSbQMWlqjhBI64EsME2Gju9Yr3rpQ6uFDMcyCC4nG7S5IekFhBfBagY8bfIZ7HSQx3LxuawS9lP',
});
export default client