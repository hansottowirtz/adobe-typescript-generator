/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class TypeUnits extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.TypeUnits}
			 * @readonly
			 */
			public static readonly MM: Adobe.Photoshop.TypeUnits;
			/**
			 * @type {Adobe.Photoshop.TypeUnits}
			 * @readonly
			 */
			public static readonly PIXELS: Adobe.Photoshop.TypeUnits;
			/**
			 * @type {Adobe.Photoshop.TypeUnits}
			 * @readonly
			 */
			public static readonly POINTS: Adobe.Photoshop.TypeUnits;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}