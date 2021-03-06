/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PostScriptLevels extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Level 2 PostScript.
			 * @type {Adobe.Indesign.PostScriptLevels}
			 * @readonly
			 */
			public static readonly LEVEL_2: Adobe.Indesign.PostScriptLevels;
			/**
			 * Level 3 PostScript.
			 * @type {Adobe.Indesign.PostScriptLevels}
			 * @readonly
			 */
			public static readonly LEVEL_3: Adobe.Indesign.PostScriptLevels;
			/**
			 * Alias for LEVEL_2. Level 2 PostScript.
			 * @type {Adobe.Indesign.PostScriptLevels}
			 * @readonly
			 */
			public static readonly level2: Adobe.Indesign.PostScriptLevels;
			/**
			 * Alias for LEVEL_3. Level 3 PostScript.
			 * @type {Adobe.Indesign.PostScriptLevels}
			 * @readonly
			 */
			public static readonly level3: Adobe.Indesign.PostScriptLevels;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}