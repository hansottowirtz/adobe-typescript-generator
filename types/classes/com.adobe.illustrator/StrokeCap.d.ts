/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class StrokeCap extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Illustrator.StrokeCap}
			 * @readonly
			 */
			public static readonly BUTTENDCAP: Adobe.Illustrator.StrokeCap;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.StrokeCap}
			 * @readonly
			 */
			public static readonly PROJECTINGENDCAP: Adobe.Illustrator.StrokeCap;
			/**
			 * @type {Adobe.Illustrator.StrokeCap}
			 * @readonly
			 */
			public static readonly ROUNDENDCAP: Adobe.Illustrator.StrokeCap;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}