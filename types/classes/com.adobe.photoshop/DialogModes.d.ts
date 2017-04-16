/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class DialogModes extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Photoshop.DialogModes}
			 * @readonly
			 */
			public static readonly ALL: Adobe.Photoshop.DialogModes;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.DialogModes}
			 * @readonly
			 */
			public static readonly ERROR: Adobe.Photoshop.DialogModes;
			/**
			 * @type {Adobe.Photoshop.DialogModes}
			 * @readonly
			 */
			public static readonly NO: Adobe.Photoshop.DialogModes;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}