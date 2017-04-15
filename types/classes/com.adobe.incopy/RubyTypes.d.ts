/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class RubyTypes extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Provides ruby for a group of characters. */
			public static readonly GROUP_RUBY: Adobe.Incopy.RubyTypes;
			/**
			 * Alias for GROUP_RUBY. Provides ruby for a group of 
			 * characters.
			 */
			public static readonly groupRuby: Adobe.Incopy.RubyTypes;
			/** Provides ruby for each individual character in the group. */
			public static readonly PER_CHARACTER_RUBY: Adobe.Incopy.RubyTypes;
			/**
			 * Alias for PER_CHARACTER_RUBY. Provides ruby for each 
			 * individual character in the group.
			 */
			public static readonly perCharacterRuby: Adobe.Incopy.RubyTypes;
			/** Constructor */
			public constructor();
		}
	}
}