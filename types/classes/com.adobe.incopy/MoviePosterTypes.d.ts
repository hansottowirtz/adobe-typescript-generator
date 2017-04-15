/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class MoviePosterTypes extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Uses an image from the movie file. */
			public static readonly FROM_MOVIE: Adobe.Incopy.MoviePosterTypes;
			/** Alias for FROM_MOVIE. Uses an image from the movie file. */
			public static readonly fromMovie: Adobe.Incopy.MoviePosterTypes;
			/** Alias for NONE. None. */
			public static readonly none: Adobe.Incopy.MoviePosterTypes;
			/** None. */
			public static readonly NONE: Adobe.Incopy.MoviePosterTypes;
			/**
			 * (Read-only) Indicates whether the movie poster is not the 
			 * standard, generic image.
			 */
			public static readonly PROXY_IMAGE: Adobe.Incopy.MoviePosterTypes;
			/**
			 * Alias for PROXY_IMAGE. (Read-only) Indicates whether the 
			 * movie poster is not the standard, generic image.
			 */
			public static readonly proxyImage: Adobe.Incopy.MoviePosterTypes;
			/**
			 * Alias for STANDARD. Uses the generic movie poster image 
			 * file.
			 */
			public static readonly standard: Adobe.Incopy.MoviePosterTypes;
			/** Uses the generic movie poster image file. */
			public static readonly STANDARD: Adobe.Incopy.MoviePosterTypes;
			/** Constructor */
			public constructor();
		}
	}
}