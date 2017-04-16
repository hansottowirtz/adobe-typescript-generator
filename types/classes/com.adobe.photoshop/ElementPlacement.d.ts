/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class ElementPlacement extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.ElementPlacement}
			 * @readonly
			 */
			public static readonly INSIDE: Adobe.Photoshop.ElementPlacement;
			/**
			 * @type {Adobe.Photoshop.ElementPlacement}
			 * @readonly
			 */
			public static readonly PLACEAFTER: Adobe.Photoshop.ElementPlacement;
			/**
			 * @type {Adobe.Photoshop.ElementPlacement}
			 * @readonly
			 */
			public static readonly PLACEATBEGINNING: Adobe.Photoshop.ElementPlacement;
			/**
			 * @type {Adobe.Photoshop.ElementPlacement}
			 * @readonly
			 */
			public static readonly PLACEATEND: Adobe.Photoshop.ElementPlacement;
			/**
			 * @type {Adobe.Photoshop.ElementPlacement}
			 * @readonly
			 */
			public static readonly PLACEBEFORE: Adobe.Photoshop.ElementPlacement;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}