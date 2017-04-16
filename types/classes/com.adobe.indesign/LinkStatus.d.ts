/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class LinkStatus extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** The file is embedded in the document. */
			public static readonly LINK_EMBEDDED: Adobe.Indesign.LinkStatus;
			/** The url link is inaccessible. */
			public static readonly LINK_INACCESSIBLE: Adobe.Indesign.LinkStatus;
			/** The linked file has been moved, renamed, or deleted. */
			public static readonly LINK_MISSING: Adobe.Indesign.LinkStatus;
			/** A more recent version of the file exists on the disk. */
			public static readonly LINK_OUT_OF_DATE: Adobe.Indesign.LinkStatus;
			/**
			 * Alias for LINK_EMBEDDED. The file is embedded in the 
			 * document.
			 */
			public static readonly linkEmbedded: Adobe.Indesign.LinkStatus;
			/** Alias for LINK_INACCESSIBLE. The url link is inaccessible. */
			public static readonly linkInaccessible: Adobe.Indesign.LinkStatus;
			/**
			 * Alias for LINK_MISSING. The linked file has been moved, 
			 * renamed, or deleted.
			 */
			public static readonly linkMissing: Adobe.Indesign.LinkStatus;
			/**
			 * Alias for LINK_OUT_OF_DATE. A more recent version of the 
			 * file exists on the disk.
			 */
			public static readonly linkOutOfDate: Adobe.Indesign.LinkStatus;
			/** Alias for NORMAL. The link is a normal link. */
			public static readonly normal: Adobe.Indesign.LinkStatus;
			/** The link is a normal link. */
			public static readonly NORMAL: Adobe.Indesign.LinkStatus;
			/** Constructor */
			public constructor();
		}
	}
}