/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class CopyrightStatus extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for NO. The document is in the public domain.
			 * @type {Adobe.Indesign.CopyrightStatus}
			 * @readonly
			 */
			public static readonly no: Adobe.Indesign.CopyrightStatus;
			/**
			 * The document is in the public domain.
			 * @type {Adobe.Indesign.CopyrightStatus}
			 * @readonly
			 */
			public static readonly NO: Adobe.Indesign.CopyrightStatus;
			/**
			 * Alias for UNKNOWN. The copyright status is unknown.
			 * @type {Adobe.Indesign.CopyrightStatus}
			 * @readonly
			 */
			public static readonly unknown: Adobe.Indesign.CopyrightStatus;
			/**
			 * The copyright status is unknown.
			 * @type {Adobe.Indesign.CopyrightStatus}
			 * @readonly
			 */
			public static readonly UNKNOWN: Adobe.Indesign.CopyrightStatus;
			/**
			 * Alias for YES. The document is copyrighted.
			 * @type {Adobe.Indesign.CopyrightStatus}
			 * @readonly
			 */
			public static readonly yes: Adobe.Indesign.CopyrightStatus;
			/**
			 * The document is copyrighted.
			 * @type {Adobe.Indesign.CopyrightStatus}
			 * @readonly
			 */
			public static readonly YES: Adobe.Indesign.CopyrightStatus;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}