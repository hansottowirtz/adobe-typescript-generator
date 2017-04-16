/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class ZOrderMethod extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Illustrator.ZOrderMethod}
			 * @readonly
			 */
			public static readonly BRINGFORWARD: Adobe.Illustrator.ZOrderMethod;
			/**
			 * @type {Adobe.Illustrator.ZOrderMethod}
			 * @readonly
			 */
			public static readonly BRINGTOFRONT: Adobe.Illustrator.ZOrderMethod;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.ZOrderMethod}
			 * @readonly
			 */
			public static readonly SENDBACKWARD: Adobe.Illustrator.ZOrderMethod;
			/**
			 * @type {Adobe.Illustrator.ZOrderMethod}
			 * @readonly
			 */
			public static readonly SENDTOBACK: Adobe.Illustrator.ZOrderMethod;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}