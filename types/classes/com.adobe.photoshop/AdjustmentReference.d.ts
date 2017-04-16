/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class AdjustmentReference extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Photoshop.AdjustmentReference}
			 * @readonly
			 */
			public static readonly ABSOLUTE: Adobe.Photoshop.AdjustmentReference;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.AdjustmentReference}
			 * @readonly
			 */
			public static readonly RELATIVE: Adobe.Photoshop.AdjustmentReference;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}