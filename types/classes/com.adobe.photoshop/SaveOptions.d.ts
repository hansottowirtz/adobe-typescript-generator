/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class SaveOptions extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Photoshop.SaveOptions}
			 * @readonly
			 */
			public static readonly DONOTSAVECHANGES: Adobe.Photoshop.SaveOptions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.SaveOptions}
			 * @readonly
			 */
			public static readonly PROMPTTOSAVECHANGES: Adobe.Photoshop.SaveOptions;
			/**
			 * @type {Adobe.Photoshop.SaveOptions}
			 * @readonly
			 */
			public static readonly SAVECHANGES: Adobe.Photoshop.SaveOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}