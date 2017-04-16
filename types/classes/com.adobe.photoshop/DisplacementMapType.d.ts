/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class DisplacementMapType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.DisplacementMapType}
			 * @readonly
			 */
			public static readonly STRETCHTOFIT: Adobe.Photoshop.DisplacementMapType;
			/**
			 * @type {Adobe.Photoshop.DisplacementMapType}
			 * @readonly
			 */
			public static readonly TILE: Adobe.Photoshop.DisplacementMapType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}