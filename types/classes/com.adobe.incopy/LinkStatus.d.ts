/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class LinkStatus extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * The file is embedded in the document.
			 * @type {Adobe.Incopy.LinkStatus}
			 * @readonly
			 */
			public static readonly LINK_EMBEDDED: Adobe.Incopy.LinkStatus;
			/**
			 * The url link is inaccessible.
			 * @type {Adobe.Incopy.LinkStatus}
			 * @readonly
			 */
			public static readonly LINK_INACCESSIBLE: Adobe.Incopy.LinkStatus;
			/**
			 * The linked file has been moved, renamed, or deleted.
			 * @type {Adobe.Incopy.LinkStatus}
			 * @readonly
			 */
			public static readonly LINK_MISSING: Adobe.Incopy.LinkStatus;
			/**
			 * A more recent version of the file exists on the disk.
			 * @type {Adobe.Incopy.LinkStatus}
			 * @readonly
			 */
			public static readonly LINK_OUT_OF_DATE: Adobe.Incopy.LinkStatus;
			/**
			 * Alias for LINK_EMBEDDED. The file is embedded in the 
			 * document.
			 * @type {Adobe.Incopy.LinkStatus}
			 * @readonly
			 */
			public static readonly linkEmbedded: Adobe.Incopy.LinkStatus;
			/**
			 * Alias for LINK_INACCESSIBLE. The url link is inaccessible.
			 * @type {Adobe.Incopy.LinkStatus}
			 * @readonly
			 */
			public static readonly linkInaccessible: Adobe.Incopy.LinkStatus;
			/**
			 * Alias for LINK_MISSING. The linked file has been moved, 
			 * renamed, or deleted.
			 * @type {Adobe.Incopy.LinkStatus}
			 * @readonly
			 */
			public static readonly linkMissing: Adobe.Incopy.LinkStatus;
			/**
			 * Alias for LINK_OUT_OF_DATE. A more recent version of the 
			 * file exists on the disk.
			 * @type {Adobe.Incopy.LinkStatus}
			 * @readonly
			 */
			public static readonly linkOutOfDate: Adobe.Incopy.LinkStatus;
			/**
			 * Alias for NORMAL. The link is a normal link.
			 * @type {Adobe.Incopy.LinkStatus}
			 * @readonly
			 */
			public static readonly normal: Adobe.Incopy.LinkStatus;
			/**
			 * The link is a normal link.
			 * @type {Adobe.Incopy.LinkStatus}
			 * @readonly
			 */
			public static readonly NORMAL: Adobe.Incopy.LinkStatus;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}