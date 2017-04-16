/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class PointKind extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Photoshop.PointKind}
			 * @readonly
			 */
			public static readonly CORNERPOINT: Adobe.Photoshop.PointKind;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.PointKind}
			 * @readonly
			 */
			public static readonly SMOOTHPOINT: Adobe.Photoshop.PointKind;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}