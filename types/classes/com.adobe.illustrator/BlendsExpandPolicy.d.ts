/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class BlendsExpandPolicy extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Illustrator.BlendsExpandPolicy}
			 * @readonly
			 */
			public static readonly AUTOMATICALLYCONVERTBLENDS: Adobe.Illustrator.BlendsExpandPolicy;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.BlendsExpandPolicy}
			 * @readonly
			 */
			public static readonly RASTERIZEBLENDS: Adobe.Illustrator.BlendsExpandPolicy;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}