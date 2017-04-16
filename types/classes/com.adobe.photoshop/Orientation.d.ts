/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class Orientation extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.Orientation}
			 * @readonly
			 */
			public static readonly LANDSCAPE: Adobe.Photoshop.Orientation;
			/**
			 * @type {Adobe.Photoshop.Orientation}
			 * @readonly
			 */
			public static readonly PORTRAIT: Adobe.Photoshop.Orientation;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}