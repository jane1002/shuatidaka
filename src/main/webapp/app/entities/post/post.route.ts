import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { PostComponent } from './post.component';
import { PostDetailComponent } from './post-detail.component';
import { PostPopupComponent } from './post-dialog.component';
import { PostDeletePopupComponent } from './post-delete-dialog.component';

export const postRoute: Routes = [
    {
        path: 'post',
        component: PostComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'dachangApp.post.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'post/:id',
        component: PostDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'dachangApp.post.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const postPopupRoute: Routes = [
    {
        path: 'post-new',
        component: PostPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'dachangApp.post.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'post/:id/edit',
        component: PostPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'dachangApp.post.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'post/:id/delete',
        component: PostDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'dachangApp.post.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
