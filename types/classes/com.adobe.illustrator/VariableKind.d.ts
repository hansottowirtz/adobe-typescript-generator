/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class VariableKind extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.VariableKind}
			 * @readonly
			 */
			public static readonly GRAPH: Adobe.Illustrator.VariableKind;
			/**
			 * @type {Adobe.Illustrator.VariableKind}
			 * @readonly
			 */
			public static readonly IMAGE: Adobe.Illustrator.VariableKind;
			/**
			 * @type {Adobe.Illustrator.VariableKind}
			 * @readonly
			 */
			public static readonly TEXTUAL: Adobe.Illustrator.VariableKind;
			/**
			 * @type {Adobe.Illustrator.VariableKind}
			 * @readonly
			 */
			public static readonly Unknown: Adobe.Illustrator.VariableKind;
			/**
			 * @type {Adobe.Illustrator.VariableKind}
			 * @readonly
			 */
			public static readonly VISIBILITY: Adobe.Illustrator.VariableKind;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}