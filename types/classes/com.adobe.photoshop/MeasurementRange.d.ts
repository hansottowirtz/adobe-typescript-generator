/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class MeasurementRange extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Photoshop.MeasurementRange}
			 * @readonly
			 */
			public static readonly ACTIVEMEASUREMENTS: Adobe.Photoshop.MeasurementRange;
			/**
			 * @type {Adobe.Photoshop.MeasurementRange}
			 * @readonly
			 */
			public static readonly ALLMEASUREMENTS: Adobe.Photoshop.MeasurementRange;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}