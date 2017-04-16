/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class AutoKernType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.AutoKernType}
			 * @readonly
			 */
			public static readonly MANUAL: Adobe.Photoshop.AutoKernType;
			/**
			 * @type {Adobe.Photoshop.AutoKernType}
			 * @readonly
			 */
			public static readonly METRICS: Adobe.Photoshop.AutoKernType;
			/**
			 * @type {Adobe.Photoshop.AutoKernType}
			 * @readonly
			 */
			public static readonly OPTICAL: Adobe.Photoshop.AutoKernType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}