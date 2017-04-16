/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ResizeMethods extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Add additional width and height to current values
			 * @type {Adobe.Incopy.ResizeMethods}
			 * @readonly
			 */
			public static readonly ADDING_CURRENT_DIMENSIONS_TO: Adobe.Incopy.ResizeMethods;
			/**
			 * Alias for ADDING_CURRENT_DIMENSIONS_TO. Add additional width 
			 * and height to current values
			 * @type {Adobe.Incopy.ResizeMethods}
			 * @readonly
			 */
			public static readonly addingCurrentDimensionsTo: Adobe.Incopy.ResizeMethods;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Multiply current width and height by the given factors
			 * @type {Adobe.Incopy.ResizeMethods}
			 * @readonly
			 */
			public static readonly MULTIPLYING_CURRENT_DIMENSIONS_BY: Adobe.Incopy.ResizeMethods;
			/**
			 * Alias for MULTIPLYING_CURRENT_DIMENSIONS_BY. Multiply 
			 * current width and height by the given factors
			 * @type {Adobe.Incopy.ResizeMethods}
			 * @readonly
			 */
			public static readonly multiplyingCurrentDimensionsBy: Adobe.Incopy.ResizeMethods;
			/**
			 * Change width and height overriding current values
			 * @type {Adobe.Incopy.ResizeMethods}
			 * @readonly
			 */
			public static readonly REPLACING_CURRENT_DIMENSIONS_WITH: Adobe.Incopy.ResizeMethods;
			/**
			 * Alias for REPLACING_CURRENT_DIMENSIONS_WITH. Change width 
			 * and height overriding current values
			 * @type {Adobe.Incopy.ResizeMethods}
			 * @readonly
			 */
			public static readonly replacingCurrentDimensionsWith: Adobe.Incopy.ResizeMethods;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}