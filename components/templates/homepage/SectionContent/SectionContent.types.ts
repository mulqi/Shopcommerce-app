export interface SectionContentProps {
	title: string;
	numToRender?: number;
	withRightBanner?: () => React.ReactNode;
	withLeftBanner?: () => React.ReactNode;
}
