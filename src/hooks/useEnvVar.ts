import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export const useEnvVar = (keyName: string) => {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  if (!customFields[keyName]) {
    throw new Error('environment variable is not defined: ' + keyName);
  }
  return customFields[keyName];
};
