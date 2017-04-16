/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class ColorProfile extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Photoshop.ColorProfile}
			 * @readonly
			 */
			public static readonly CUSTOM: Adobe.Photoshop.ColorProfile;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.ColorProfile}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Photoshop.ColorProfile;
			/**
			 * @type {Adobe.Photoshop.ColorProfile}
			 * @readonly
			 */
			public static readonly WORKING: Adobe.Photoshop.ColorProfile;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}