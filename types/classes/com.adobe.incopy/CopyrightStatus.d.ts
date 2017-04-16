/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class CopyrightStatus extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for NO. The document is in the public domain.
			 * @type {Adobe.Incopy.CopyrightStatus}
			 * @readonly
			 */
			public static readonly no: Adobe.Incopy.CopyrightStatus;
			/**
			 * The document is in the public domain.
			 * @type {Adobe.Incopy.CopyrightStatus}
			 * @readonly
			 */
			public static readonly NO: Adobe.Incopy.CopyrightStatus;
			/**
			 * Alias for UNKNOWN. The copyright status is unknown.
			 * @type {Adobe.Incopy.CopyrightStatus}
			 * @readonly
			 */
			public static readonly unknown: Adobe.Incopy.CopyrightStatus;
			/**
			 * The copyright status is unknown.
			 * @type {Adobe.Incopy.CopyrightStatus}
			 * @readonly
			 */
			public static readonly UNKNOWN: Adobe.Incopy.CopyrightStatus;
			/**
			 * Alias for YES. The document is copyrighted.
			 * @type {Adobe.Incopy.CopyrightStatus}
			 * @readonly
			 */
			public static readonly yes: Adobe.Incopy.CopyrightStatus;
			/**
			 * The document is copyrighted.
			 * @type {Adobe.Incopy.CopyrightStatus}
			 * @readonly
			 */
			public static readonly YES: Adobe.Incopy.CopyrightStatus;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}