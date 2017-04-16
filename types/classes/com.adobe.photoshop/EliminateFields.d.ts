/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class EliminateFields extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.EliminateFields}
			 * @readonly
			 */
			public static readonly EVENFIELDS: Adobe.Photoshop.EliminateFields;
			/**
			 * @type {Adobe.Photoshop.EliminateFields}
			 * @readonly
			 */
			public static readonly ODDFIELDS: Adobe.Photoshop.EliminateFields;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}