/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class LayerOrderType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Illustrator.LayerOrderType}
			 * @readonly
			 */
			public static readonly BOTTOMUP: Adobe.Illustrator.LayerOrderType;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.LayerOrderType}
			 * @readonly
			 */
			public static readonly TOPDOWN: Adobe.Illustrator.LayerOrderType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}