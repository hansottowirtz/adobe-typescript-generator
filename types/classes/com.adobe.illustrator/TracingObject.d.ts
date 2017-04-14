/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class TracingObject extends IllustratorHostObject {
			/** The number of anchors in the tracing result. */
			public readonly anchorCount: number;
			/** The number of areas in the tracing result. */
			public readonly areaCount: number;
			/** The resolution of the source image (in pixels per inch). */
			public readonly imageResolution: number;
			/** The number of paths in the tracing result. */
			public readonly pathCount: number;
			/** The source art used when creating a new tracing object. */
			public readonly sourceArt: PageItem;
			/** The options used when tracing the artwork. */
			public readonly tracingOptions: TracingOptions;
			/** The number of colors used in the tracing result. */
			public readonly usedColorCount: number;
			/** Expand the tracing to paths. Deletes this tracing object. */
			public expandTracing(viewed: boolean): GroupItem;
			/**
			 * Release the source artwork for the tracing object. Deletes 
			 * this tracing object.
			 */
			public releaseTracing(): PageItem;
		}
	}
}