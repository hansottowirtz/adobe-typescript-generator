/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class StrokeJoin extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Illustrator.StrokeJoin}
			 * @readonly
			 */
			public static readonly BEVELENDJOIN: Adobe.Illustrator.StrokeJoin;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.StrokeJoin}
			 * @readonly
			 */
			public static readonly MITERENDJOIN: Adobe.Illustrator.StrokeJoin;
			/**
			 * @type {Adobe.Illustrator.StrokeJoin}
			 * @readonly
			 */
			public static readonly ROUNDENDJOIN: Adobe.Illustrator.StrokeJoin;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}