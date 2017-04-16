/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class StrokeLocation extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Photoshop.StrokeLocation}
			 * @readonly
			 */
			public static readonly CENTER: Adobe.Photoshop.StrokeLocation;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.StrokeLocation}
			 * @readonly
			 */
			public static readonly INSIDE: Adobe.Photoshop.StrokeLocation;
			/**
			 * @type {Adobe.Photoshop.StrokeLocation}
			 * @readonly
			 */
			public static readonly OUTSIDE: Adobe.Photoshop.StrokeLocation;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}