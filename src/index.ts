import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ISettingRegistry } from '@jupyterlab/settingregistry';

/**
 * Initialization data for the StickyViewer extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'StickyViewer:plugin',
  autoStart: true,
  optional: [ISettingRegistry],
  activate: (app: JupyterFrontEnd, settingRegistry: ISettingRegistry | null) => {
    console.log('JupyterLab extension StickyViewer is activated!');

    if (settingRegistry) {
      settingRegistry
        .load(plugin.id)
        .then(settings => {
          console.log('StickyViewer settings loaded:', settings.composite);
        })
        .catch(reason => {
          console.error('Failed to load settings for StickyViewer.', reason);
        });
    }
  }
};

export default plugin;
