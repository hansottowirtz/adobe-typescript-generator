/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A tracing object. */
		class TracingObject extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * The number of anchors in the tracing result.
			 * @type {number}
			 * @readonly
			 */
			public readonly anchorCount: number;
			/**
			 * The number of paths in the tracing result.
			 * @type {number}
			 * @readonly
			 */
			public readonly pathCount: number;
			/**
			 * The source art used when creating a new tracing object.
			 * @type {Adobe.Illustrator.PageItem}
			 * @readonly
			 */
			public readonly sourceArt: Adobe.Illustrator.PageItem;
			/**
			 * The options used when tracing the artwork.
			 * @type {Adobe.Illustrator.TracingOptions}
			 * @readonly
			 */
			public readonly tracingOptions: Adobe.Illustrator.TracingOptions;
			/**
			 * The number of colors used in the tracing result.
			 * @type {number}
			 * @readonly
			 */
			public readonly usedColorCount: number;
			/**
			 * Expand the tracing to paths.  Deletes this tracing object.
			 * @param {boolean} viewed expand as viewed with the raster and 
			 * vector view modes. ( default: false )
			 * @returns {Adobe.Illustrator.GroupItem}
			 */
			public expandTracing(viewed: boolean): Adobe.Illustrator.GroupItem;
			/**
			 * Release the source artwork for the tracing object.  Deletes 
			 * this tracing object.
			 * @returns {Adobe.Illustrator.PageItem}
			 */
			public releaseTracing(): Adobe.Illustrator.PageItem;
		}
	}
}