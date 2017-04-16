/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ScriptLanguage extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for JAVASCRIPT. The JavaScript language.
			 * @type {Adobe.Incopy.ScriptLanguage}
			 * @readonly
			 */
			public static readonly javascript: Adobe.Incopy.ScriptLanguage;
			/**
			 * The JavaScript language.
			 * @type {Adobe.Incopy.ScriptLanguage}
			 * @readonly
			 */
			public static readonly JAVASCRIPT: Adobe.Incopy.ScriptLanguage;
			/**
			 * Alias for UNKNOWN. Language not specified.
			 * @type {Adobe.Incopy.ScriptLanguage}
			 * @readonly
			 */
			public static readonly unknown: Adobe.Incopy.ScriptLanguage;
			/**
			 * Language not specified.
			 * @type {Adobe.Incopy.ScriptLanguage}
			 * @readonly
			 */
			public static readonly UNKNOWN: Adobe.Incopy.ScriptLanguage;
			/**
			 * The VBScript language.
			 * @type {Adobe.Incopy.ScriptLanguage}
			 * @readonly
			 */
			public static readonly VISUAL_BASIC: Adobe.Incopy.ScriptLanguage;
			/**
			 * Alias for VISUAL_BASIC. The VBScript language.
			 * @type {Adobe.Incopy.ScriptLanguage}
			 * @readonly
			 */
			public static readonly visualBasic: Adobe.Incopy.ScriptLanguage;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}