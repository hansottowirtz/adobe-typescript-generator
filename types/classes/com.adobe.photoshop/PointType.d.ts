/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class PointType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.PointType}
			 * @readonly
			 */
			public static readonly POSTSCRIPT: Adobe.Photoshop.PointType;
			/**
			 * @type {Adobe.Photoshop.PointType}
			 * @readonly
			 */
			public static readonly TRADITIONAL: Adobe.Photoshop.PointType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}