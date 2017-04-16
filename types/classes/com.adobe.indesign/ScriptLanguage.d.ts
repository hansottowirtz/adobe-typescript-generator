/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ScriptLanguage extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for JAVASCRIPT. The JavaScript language.
			 * @type {Adobe.Indesign.ScriptLanguage}
			 * @readonly
			 */
			public static readonly javascript: Adobe.Indesign.ScriptLanguage;
			/**
			 * The JavaScript language.
			 * @type {Adobe.Indesign.ScriptLanguage}
			 * @readonly
			 */
			public static readonly JAVASCRIPT: Adobe.Indesign.ScriptLanguage;
			/**
			 * Alias for UNKNOWN. Language not specified.
			 * @type {Adobe.Indesign.ScriptLanguage}
			 * @readonly
			 */
			public static readonly unknown: Adobe.Indesign.ScriptLanguage;
			/**
			 * Language not specified.
			 * @type {Adobe.Indesign.ScriptLanguage}
			 * @readonly
			 */
			public static readonly UNKNOWN: Adobe.Indesign.ScriptLanguage;
			/**
			 * The VBScript language.
			 * @type {Adobe.Indesign.ScriptLanguage}
			 * @readonly
			 */
			public static readonly VISUAL_BASIC: Adobe.Indesign.ScriptLanguage;
			/**
			 * Alias for VISUAL_BASIC. The VBScript language.
			 * @type {Adobe.Indesign.ScriptLanguage}
			 * @readonly
			 */
			public static readonly visualBasic: Adobe.Indesign.ScriptLanguage;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}