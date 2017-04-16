/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Profile extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * No CMS profile is used.
			 * @type {Adobe.Incopy.Profile}
			 * @readonly
			 */
			public static readonly NO_CMS: Adobe.Incopy.Profile;
			/**
			 * Alias for NO_CMS. No CMS profile is used.
			 * @type {Adobe.Incopy.Profile}
			 * @readonly
			 */
			public static readonly noCms: Adobe.Incopy.Profile;
			/**
			 * Uses the PostScript CMS profile.
			 * @type {Adobe.Incopy.Profile}
			 * @readonly
			 */
			public static readonly POSTSCRIPT_CMS: Adobe.Incopy.Profile;
			/**
			 * Alias for POSTSCRIPT_CMS. Uses the PostScript CMS profile.
			 * @type {Adobe.Incopy.Profile}
			 * @readonly
			 */
			public static readonly postscriptCms: Adobe.Incopy.Profile;
			/**
			 * Uses the document profile.
			 * @type {Adobe.Incopy.Profile}
			 * @readonly
			 */
			public static readonly USE_DOCUMENT: Adobe.Incopy.Profile;
			/**
			 * Alias for USE_DOCUMENT. Uses the document profile.
			 * @type {Adobe.Incopy.Profile}
			 * @readonly
			 */
			public static readonly useDocument: Adobe.Incopy.Profile;
			/**
			 * Alias for WORKING. Uses the working profile.
			 * @type {Adobe.Incopy.Profile}
			 * @readonly
			 */
			public static readonly working: Adobe.Incopy.Profile;
			/**
			 * Uses the working profile.
			 * @type {Adobe.Incopy.Profile}
			 * @readonly
			 */
			public static readonly WORKING: Adobe.Incopy.Profile;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}