/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ContainerType extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for ALT. The container contains alternative values of 
			 * which only one can be used.
			 */
			public static readonly alt: Adobe.Incopy.ContainerType;
			/**
			 * The container contains alternative values of which only one 
			 * can be used.
			 */
			public static readonly ALT: Adobe.Incopy.ContainerType;
			/** Alias for BAG. The container contains unordered items. */
			public static readonly bag: Adobe.Incopy.ContainerType;
			/** The container contains unordered items. */
			public static readonly BAG: Adobe.Incopy.ContainerType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for SEQ. The container contains ordered or sequential 
			 * items.
			 */
			public static readonly seq: Adobe.Incopy.ContainerType;
			/** The container contains ordered or sequential items. */
			public static readonly SEQ: Adobe.Incopy.ContainerType;
			/** Constructor */
			public constructor();
		}
	}
}