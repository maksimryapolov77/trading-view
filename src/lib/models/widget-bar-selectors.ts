import { IWidget } from './widget.interface';
import { ChartTypes } from './chart-types.enum';

export const WidgetBarSelectors: IWidget[] = [
  {
    id: 1,
    pinned: true,
    cols: 2,
    rows: 2,
    inDashboard: false,
    title: 'Real-Time Chart',
    component: undefined,
    type: ChartTypes.RealTimeChart,
    drawDataset: {
      containerId: 'widget-bar-container',
    },
  },
  {
    id: 2,
    pinned: true,
    cols: 2,
    rows: 2,
    inDashboard: false,
    title: 'Market Overview',
    component: undefined,
    type: ChartTypes.MarketOverviewChart,
    drawDataset: undefined,
  },
  {
    id: 3,
    pinned: true,
    cols: 2,
    rows: 2,
    inDashboard: false,
    title: 'Stock Market',
    component: undefined,
    type: ChartTypes.StockMarketChart,
    drawDataset: undefined,
  },
  {
    id: 4,
    pinned: false,
    cols: 2,
    rows: 2,
    inDashboard: false,
    title: 'Ag-grid',
    component: undefined,
    type: ChartTypes.AgTableGrid,
    drawDataset: undefined,
  },
  {
    id: 5,
    pinned: false,
    cols: 2,
    rows: 2,
    inDashboard: false,
    title: 'Market Overview',
    component: undefined,
    type: ChartTypes.MarketOverviewChart,
    drawDataset: undefined,
  },
  {
    id: 6,
    pinned: false,
    cols: 2,
    rows: 2,
    inDashboard: false,
    title: 'Stock Market',
    component: undefined,
    type: ChartTypes.StockMarketChart,
    drawDataset: undefined,
  },
  {
    id: 7,
    pinned: false,
    cols: 2,
    rows: 2,
    inDashboard: false,    
    title: 'Monaco Editor',
    component: undefined,
    type: ChartTypes.MonacoEditor,
    drawDataset: undefined,
  },
];
