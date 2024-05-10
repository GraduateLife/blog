import { usePluginData } from '@docusaurus/useGlobalData';

type X = {
  __FrontMatters__: Record<string, any>[];
};

/**
 * TODO: add autoAppend frontmatters:
 * auto add author, date, title, so we can spend less time
 * enhance plugin does not fully used!
 */

export const useFrontMatters = () => {
  const { __FrontMatters__ } = usePluginData(
    'docusaurus-plugin-content-blog'
  ) as X;
  return __FrontMatters__;
};
