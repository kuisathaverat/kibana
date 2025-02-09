/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { EuiDataGridColumn, EuiDataGridColumnCellAction } from '@elastic/eui';
import { i18n } from '@kbn/i18n';
import { severitySchemaConfig } from './utils/custom_sort_script';

export const vulnerabilitiesColumns = {
  actions: 'actions',
  vulnerability: 'vulnerability.id',
  cvss: 'vulnerability.score.base',
  resource: 'resource.name',
  severity: 'vulnerability.severity',
  package_version: 'vulnerability.package.name',
  fix_version: 'vulnerability.package.fixed_version',
};

const defaultColumnProps = () => ({
  isExpandable: false,
  actions: {
    showHide: false,
    showMoveLeft: false,
    showMoveRight: false,
  },
});

export const getVulnerabilitiesColumnsGrid = (
  cellActions: EuiDataGridColumnCellAction[]
): EuiDataGridColumn[] => [
  {
    ...defaultColumnProps(),
    id: vulnerabilitiesColumns.actions,
    initialWidth: 40,
    display: [],
    actions: false,
    isSortable: false,
    isResizable: false,
    cellActions: [],
  },
  {
    ...defaultColumnProps(),
    id: vulnerabilitiesColumns.vulnerability,
    displayAsText: i18n.translate('xpack.csp.vulnerabilityTable.column.vulnerability', {
      defaultMessage: 'Vulnerability',
    }),
    initialWidth: 130,
    cellActions,
  },
  {
    ...defaultColumnProps(),
    id: vulnerabilitiesColumns.cvss,
    displayAsText: 'CVSS',
    initialWidth: 80,
    isResizable: false,
    cellActions,
  },
  {
    ...defaultColumnProps(),
    id: vulnerabilitiesColumns.resource,
    displayAsText: i18n.translate('xpack.csp.vulnerabilityTable.column.resource', {
      defaultMessage: 'Resource',
    }),
    cellActions,
  },
  {
    ...defaultColumnProps(),
    id: vulnerabilitiesColumns.severity,
    displayAsText: i18n.translate('xpack.csp.vulnerabilityTable.column.severity', {
      defaultMessage: 'Severity',
    }),
    initialWidth: 100,
    cellActions,
    schema: severitySchemaConfig.type,
  },
  {
    ...defaultColumnProps(),
    id: vulnerabilitiesColumns.package_version,
    displayAsText: i18n.translate('xpack.csp.vulnerabilityTable.column.packageAndVersion', {
      defaultMessage: 'Package and Version',
    }),
    cellActions,
  },
  {
    ...defaultColumnProps(),
    id: vulnerabilitiesColumns.fix_version,
    displayAsText: i18n.translate('xpack.csp.vulnerabilityTable.column.fixVersion', {
      defaultMessage: 'Fix Version',
    }),
    cellActions,
  },
];
