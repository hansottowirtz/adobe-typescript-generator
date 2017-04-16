/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class MeasurementSource extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.MeasurementSource}
			 * @readonly
			 */
			public static readonly MEASURECOUNTTOOL: Adobe.Photoshop.MeasurementSource;
			/**
			 * @type {Adobe.Photoshop.MeasurementSource}
			 * @readonly
			 */
			public static readonly MEASURERULERTOOL: Adobe.Photoshop.MeasurementSource;
			/**
			 * @type {Adobe.Photoshop.MeasurementSource}
			 * @readonly
			 */
			public static readonly MEASURESELECTION: Adobe.Photoshop.MeasurementSource;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}