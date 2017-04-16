/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class ElementPlacement extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.ElementPlacement}
			 * @readonly
			 */
			public static readonly INSIDE: Adobe.Illustrator.ElementPlacement;
			/**
			 * @type {Adobe.Illustrator.ElementPlacement}
			 * @readonly
			 */
			public static readonly PLACEAFTER: Adobe.Illustrator.ElementPlacement;
			/**
			 * @type {Adobe.Illustrator.ElementPlacement}
			 * @readonly
			 */
			public static readonly PLACEATBEGINNING: Adobe.Illustrator.ElementPlacement;
			/**
			 * @type {Adobe.Illustrator.ElementPlacement}
			 * @readonly
			 */
			public static readonly PLACEATEND: Adobe.Illustrator.ElementPlacement;
			/**
			 * @type {Adobe.Illustrator.ElementPlacement}
			 * @readonly
			 */
			public static readonly PLACEBEFORE: Adobe.Illustrator.ElementPlacement;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}