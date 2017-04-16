/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class OutputFlattening extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.OutputFlattening}
			 * @readonly
			 */
			public static readonly PRESERVEAPPEARANCE: Adobe.Illustrator.OutputFlattening;
			/**
			 * @type {Adobe.Illustrator.OutputFlattening}
			 * @readonly
			 */
			public static readonly PRESERVEPATHS: Adobe.Illustrator.OutputFlattening;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}