<?php

namespace Air_Light;


add_shortcode( 'add_breadcrumbs', 'Air_Light\the_breadcrumb' );


/*=============================================
                BREADCRUMBS
=============================================*/
//  to include in functions.php
function the_breadcrumb()
{
    $showOnHome = 0; // 1 - show breadcrumbs on the homepage, 0 - don't show
    $showCurrent = 1; // 1 - show current post/page title in breadcrumbs, 0 - don't show
    $showCats = 0; // 1 - show categories in breadcrumbs, 0 - don't show
    $delimiter = '<span class="separator">/</span>'; // delimiter between crumbs
    $home = 'Forside'; // text for the 'Home' link
    $before = '<span class="current">'; // tag before the current crumb
    $after = '</span>'; // tag after the current crumb

    //$homeIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 19.6" style="enable-background:new 0 0 22 19.6" xml:space="preserve" width="22" height="19"><path d="M18 19.6H4c-.6 0-1-.4-1-1v-9H0L10.3.2c.4-.3 1-.3 1.3 0L22 9.6h-3v9c0 .6-.4 1-1 1zm-13-2h12V7.8l-6-5.5-6 5.5v9.8z" style="fill:#3d7070"/></svg>';

    global $post;
    $homeLink = get_bloginfo('url');

    if (is_front_page()) {

        if ($showOnHome == 1) {
            echo '<div id="breadcrumbs"><a href="' . $homeLink . '">' . $home . '</a></div>';
        }

    } else {
        echo '<div id="breadcrumbs"><a href="' . $homeLink . '">' . $home . '</a> ' . $delimiter . ' ';

        if (is_home()) {
          echo $before . get_post_type_object('post')->labels->name . $after;
        }

        if (is_category()) {
            $thisCat = get_category(get_query_var('cat'), false);
            if ($thisCat->parent != 0) {
                echo get_category_parents($thisCat->parent, true, ' ' . $delimiter . ' ');
            }
            echo $before . single_cat_title('', false) . $after;

        } elseif (is_search()) {
            echo $before . 'Søkeresultat for "' . get_search_query() . '"' . $after;

        } elseif (is_day()) {
            echo '<a href="' . get_year_link(get_the_time('Y')) . '">' . get_the_time('Y') . '</a> ' . $delimiter . ' ';
            echo '<a href="' . get_month_link(get_the_time('Y'), get_the_time('m')) . '">' . get_the_time('F') . '</a> ' . $delimiter . ' ';
            echo $before . get_the_time('d') . $after;

        } elseif (is_month()) {
            echo '<a href="' . get_year_link(get_the_time('Y')) . '">' . get_the_time('Y') . '</a> ' . $delimiter . ' ';
            echo $before . get_the_time('F') . $after;

        } elseif (is_year()) {
            echo $before . get_the_time('Y') . $after;

        } elseif (is_single() && !is_attachment()) {
            if (get_post_type() != 'post') {
                $post_type = get_post_type_object(get_post_type());
                $slug = $post_type->rewrite;
                echo '<a href="' . $homeLink . '/' . $slug['slug'] . '/">' . $post_type->labels->singular_name . '</a>';
                if ($showCurrent == 1) {
                    echo ' ' . $delimiter . ' ' . $before . get_the_title() . $after;
                }
            } else {
                $cat = get_the_category();
                $cat = $cat[0];
                $cats = get_category_parents($cat, true, ' ' . $delimiter . ' ');

                if ($showCats == 1) {
                  if ($showCurrent == 0) {
                      $cats = preg_replace("#^(.+)\s$delimiter\s$#", "$1", $cats);
                  }
                  echo $cats;
                }

                if ($showCurrent == 1) {
                    $postPrefix = get_post_type_object('post')->labels->name;
                    $archiveLink = ' <a href="' . get_post_type_archive_link( 'post' ) . '">' . $postPrefix . '</a> ';
                    echo $archiveLink . $delimiter . ' ' . $before . get_the_title() . $after;
                }
            }

        } elseif (!is_single() && !is_page() && get_post_type() != 'post' && !is_404()) {
            $post_type = get_post_type_object(get_post_type());
            echo $before . $post_type->labels->singular_name . $after;

        } elseif (is_attachment()) {
            $parent = get_post($post->post_parent);
            $cat = get_the_category($parent->ID);
            $cat = $cat[0];
            echo get_category_parents($cat, true, ' ' . $delimiter . ' ');
            echo '<a href="' . get_permalink($parent) . '">' . $parent->post_title . '</a>';
            if ($showCurrent == 1) {
                echo ' ' . $delimiter . ' ' . $before . get_the_title() . $after;
            }

        } elseif (is_page() && !$post->post_parent) {
            if ($showCurrent == 1) {
                echo $before . get_the_title() . $after;
            }

        } elseif (is_page() && $post->post_parent) {
            $parent_id  = $post->post_parent;
            $breadcrumbs = array();
            while ($parent_id) {
                $page = get_page($parent_id);
                $breadcrumbs[] = '<a href="' . get_permalink($page->ID) . '">' . get_the_title($page->ID) . '</a>';
                $parent_id  = $page->post_parent;
            }
            $breadcrumbs = array_reverse($breadcrumbs);
            for ($i = 0; $i < count($breadcrumbs); $i++) {
                echo $breadcrumbs[$i];
                if ($i != count($breadcrumbs)-1) {
                    echo ' ' . $delimiter . ' ';
                }
            }
            if ($showCurrent == 1) {
                echo ' ' . $delimiter . ' ' . $before . get_the_title() . $after;
            }

        } elseif (is_tag()) {
            echo $before . 'Posts tagged "' . single_tag_title('', false) . '"' . $after;

        } elseif (is_author()) {
            global $author;
            $userdata = get_userdata($author);
            echo $before . 'Articles posted by ' . $userdata->display_name . $after;

        } elseif (is_404()) {
            echo $before . 'Error 404' . $after;
        }

        if (get_query_var('paged')) {
            if (is_category() || is_day() || is_month() || is_year() || is_search() || is_tag() || is_author()) {
                echo ' (';
            }
            echo __('Page') . ' ' . get_query_var('paged');
            if (is_category() || is_day() || is_month() || is_year() || is_search() || is_tag() || is_author()) {
                echo ')';
            }
        }
        echo '</div>';
    }
} // end the_breadcrumb()