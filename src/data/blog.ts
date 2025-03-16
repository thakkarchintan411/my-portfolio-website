export interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  tags: string[];
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Building Enterprise-grade Node.js Applications",
    date: "March 15, 2024",
    excerpt: "A comprehensive guide to structuring large-scale Node.js applications with best practices, folder organization, and architectural patterns.",
    image: "/public/Node.webp",
    tags: ["Node.js", "Architecture", "Backend", "Enterprise"],
    slug: "building-enterprise-nodejs-apps",
    content: `
# Building Enterprise-grade Node.js Applications

A well-structured Node.js application is crucial for maintainability, scalability, and team collaboration. This comprehensive guide covers everything you need to know about building robust Node.js applications.

![Node.js Architecture](/blog/nodejs-architecture.png)

## Project Structure

The following structure represents a scalable and maintainable Node.js application architecture. Each directory serves a specific purpose, making it easier for teams to collaborate and maintain code quality. This organization follows the separation of concerns principle and makes it simple to add new features or modify existing ones without affecting other parts of the application.

\`\`\`
src/
├── config/
│   ├── database.ts
│   ├── redis.ts
│   └── environment.ts
├── controllers/
│   ├── auth.controller.ts
│   └── user.controller.ts
├── services/
│   ├── auth.service.ts
│   └── user.service.ts
├── models/
│   └── user.model.ts
├── routes/
│   ├── auth.routes.ts
│   └── user.routes.ts
├── middlewares/
│   ├── auth.middleware.ts
│   ├── error.middleware.ts
│   └── validation.middleware.ts
├── utils/
│   ├── logger.ts
│   ├── response.ts
│   └── encryption.ts
├── validations/
│   ├── auth.schema.ts
│   └── user.schema.ts
├── types/
│   └── index.d.ts
└── index.ts
\`\`\`

## Detailed Component Breakdown

### 1. Config Layer
The configuration layer is essential for managing environment-specific settings and external service connections. By centralizing configuration management, we can easily switch between different environments (development, staging, production) and maintain secure credential handling. The following example demonstrates how to use Zod for runtime type validation of environment variables, ensuring your application starts with the correct configuration.

\`\`\`typescript
// config/environment.ts
import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']),
  PORT: z.string().transform(Number),
  MONGODB_URI: z.string(),
  JWT_SECRET: z.string(),
  REDIS_URL: z.string().optional(),
});

export const env = envSchema.parse(process.env);
\`\`\`

This configuration setup provides several benefits. First, it ensures type safety by validating environment variables at runtime, preventing issues that might arise from missing or incorrect environment variables. Second, it transforms values into their appropriate types, making them easier to use throughout the application. The use of Zod also provides excellent TypeScript integration, giving you autocompletion and type checking while working with configuration values.

### 2. Controllers Layer
Controllers act as the entry point for HTTP requests, handling input validation and response formatting. They follow the Single Responsibility Principle by delegating business logic to services. This separation makes the code more testable and maintainable. The following example shows a well-structured controller with proper error handling and input validation.

\`\`\`typescript
// controllers/auth.controller.ts
import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';
import { LoginSchema } from '../validations/auth.schema';
import { ResponseUtil } from '../utils/response';

export class AuthController {
  constructor(private authService: AuthService) {}

  async login(req: Request, res: Response) {
    try {
      const validatedData = LoginSchema.parse(req.body);
      const result = await this.authService.login(validatedData);
      return ResponseUtil.success(res, result);
    } catch (error) {
      return ResponseUtil.error(res, error);
    }
  }
}
\`\`\`

This controller implementation demonstrates several best practices. It uses dependency injection for better testability, implements proper error handling, and validates input data before processing. The use of a ResponseUtil ensures consistent response formatting across the application. The controller's methods are focused and handle only the HTTP layer concerns, making the code easier to maintain and test.

### 3. Services Layer
The services layer contains the core business logic of your application. It's responsible for data processing, external service integration, and implementing business rules. Services should be stateless and follow the Single Responsibility Principle. Here's an example of a well-structured authentication service:

\`\`\`typescript
// services/auth.service.ts
import { UserModel } from '../models/user.model';
import { JwtUtil } from '../utils/jwt';
import { PasswordUtil } from '../utils/password';
import { CustomError } from '../utils/error';

export class AuthService {
  async login({ email, password }: LoginDto) {
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw new CustomError('Invalid credentials', 401);
    }

    const isPasswordValid = await PasswordUtil.compare(password, user.password);
    if (!isPasswordValid) {
      throw new CustomError('Invalid credentials', 401);
    }

    const token = JwtUtil.sign({ userId: user._id });
    return { token, user: user.toJSON() };
  }
}
\`\`\`

This service implementation showcases several important patterns. It uses utility classes for specific functionality (JWT handling, password comparison), implements proper error handling with custom error classes, and follows a clear, single-responsibility approach. The service methods are focused on business logic and don't contain HTTP-specific code, making them reusable across different parts of the application.

### 4. Middleware Implementation
Middlewares are crucial for handling cross-cutting concerns like authentication, logging, and error handling. They help keep your code DRY and maintain separation of concerns. Here's an example of a comprehensive error handling middleware:

\`\`\`typescript
// middlewares/error.middleware.ts
import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { CustomError } from '../utils/error';
import { logger } from '../utils/logger';

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(error);

  if (error instanceof ZodError) {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      errors: error.errors,
    });
  }

  if (error instanceof CustomError) {
    return res.status(error.statusCode).json({
      success: false,
      message: error.message,
    });
  }

  return res.status(500).json({
    success: false,
    message: 'Internal server error',
  });
};
\`\`\`

This middleware demonstrates proper error handling for different types of errors (validation errors, custom business errors, and unexpected errors). It includes logging for debugging purposes and provides consistent error responses. The use of custom error classes helps in handling business-specific errors appropriately.

## Best Practices and Security Considerations

1. **Authentication and Authorization**
   - Implement JWT-based authentication
   - Use role-based access control
   - Implement proper password hashing
   - Use secure session management

2. **Data Validation and Sanitization**
   - Validate all input data
   - Implement request rate limiting
   - Use proper data sanitization
   - Implement proper CORS policies

3. **Error Handling and Logging**
   - Implement centralized error handling
   - Use proper logging levels
   - Implement request tracking
   - Handle uncaught exceptions

4. **Performance Optimization**
   - Implement proper caching strategies
   - Use connection pooling
   - Implement proper indexing
   - Use compression middleware

5. **Testing Strategy**
   - Unit tests for business logic
   - Integration tests for APIs
   - Load testing for performance
   - Security testing
    `
  },
  {
    title: "Deploying Full-Stack Applications to the Cloud: A Guide to AWS/GCP/Azure",
    date: "March 25, 2024",
    excerpt: "A comprehensive guide to deploying full-stack applications on major cloud platforms, covering infrastructure setup, CI/CD pipelines, and best practices for production deployment.",
    image: "/public/cloud-deployment.jpeg",
    tags: ["Cloud", "DevOps", "AWS", "GCP", "Azure", "CI/CD"],
    slug: "cloud-deployment-guide",
    content: `
# Deploying Full-Stack Applications to the Cloud: A Guide to AWS/GCP/Azure

Cloud deployment has become an essential skill for modern developers. This guide explores the fundamentals of deploying full-stack applications across major cloud platforms, focusing on practical approaches and industry best practices.

## Understanding Cloud Platforms

When it comes to cloud deployment, three major platforms dominate the market: AWS, Google Cloud Platform (GCP), and Microsoft Azure. Each platform offers unique advantages, but they share common core services. AWS leads with its extensive service portfolio and market presence. GCP excels in container orchestration and machine learning capabilities. Azure provides seamless integration with Microsoft's ecosystem and robust enterprise features.

## Infrastructure Setup and Management

Modern cloud infrastructure relies heavily on Infrastructure as Code (IaC) principles. Using tools like Terraform or CloudFormation, we can define our infrastructure in code, making it version-controlled, repeatable, and maintainable. Here's a simple example using Terraform:

\`\`\`hcl
# Basic AWS infrastructure setup
resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
  
  tags = {
    Name = "production"
    Environment = "prod"
  }
}

resource "aws_subnet" "public" {
  vpc_id     = aws_vpc.main.id
  cidr_block = "10.0.1.0/24"
}
\`\`\`

## Continuous Integration and Deployment

A robust CI/CD pipeline is crucial for reliable cloud deployments. Modern workflows typically involve automated testing, building, and deployment processes. GitHub Actions has become a popular choice for its simplicity and tight integration with repositories:

\`\`\`yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Cloud
        run: |
          npm install
          npm run build
          npm run deploy
\`\`\`

## Security and Performance Optimization

Security in cloud deployments requires a multi-layered approach. This includes proper network configuration, access control management, and regular security audits. Performance optimization involves strategic use of CDNs, caching mechanisms, and auto-scaling configurations. Both aspects need continuous monitoring and periodic reviews to maintain optimal operation.

## Database Management in the Cloud

Cloud databases require careful consideration of scaling, backup strategies, and disaster recovery plans. Whether using managed services like AWS RDS or implementing custom solutions, it's crucial to maintain data integrity and performance:

\`\`\`sql
-- Example of a well-structured database setup
CREATE DATABASE production_db;

CREATE TABLE users (
    id UUID PRIMARY KEY,
    email VARCHAR(255) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Add appropriate indexes
CREATE INDEX idx_users_email ON users(email);
\`\`\`

## Containerization and Orchestration

Container technologies like Docker and Kubernetes have revolutionized cloud deployments. They provide consistency across environments and simplified scaling capabilities:

\`\`\`dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

## Monitoring and Maintenance

Effective cloud deployment doesn't end with the initial setup. Continuous monitoring, log analysis, and regular maintenance are essential for long-term success. Implementing proper alerting systems and maintaining comprehensive documentation ensures smooth operation and quick problem resolution.

## Conclusion

Successful cloud deployment requires a balanced approach to infrastructure, security, and maintenance. By following these principles and staying updated with cloud technologies, teams can build and maintain robust, scalable applications in the cloud. Remember that cloud deployment is an iterative process - start simple, monitor closely, and optimize based on real usage patterns.
    `
  },
  {
    title: "Building Large-scale React Applications",
    date: "March 20, 2024",
    excerpt: "A comprehensive guide to architecting scalable React applications with best practices, state management, performance optimization, and component organization.",
    image: "/public/React.webp",
    tags: ["React", "Architecture", "Frontend", "TypeScript"],
    slug: "building-large-scale-react-apps",
    content: `
# Building Large-scale React Applications

Creating maintainable and scalable React applications requires careful consideration of architecture, state management, and performance optimization. This guide covers essential patterns and practices for building enterprise-grade React applications.

![React Architecture](/blog/react-architecture.png)

## Project Structure

The following structure represents a scalable React application architecture that promotes code reusability, maintainability, and team collaboration. This organization follows atomic design principles and feature-based structuring.

\`\`\`
src/
├── components/
│   ├── common/
│   │   ├── Button/
│   │   ├── Input/
│   │   └── Modal/
│   └── features/
│       ├── auth/
│       └── dashboard/
├── hooks/
│   ├── useDebounce.ts
│   └── useIntersection.ts
├── store/
│   ├── slices/
│   └── middleware/
├── services/
│   ├── api.ts
│   └── auth.ts
├── utils/
│   ├── validation.ts
│   └── formatting.ts
├── types/
│   └── index.d.ts
└── App.tsx
\`\`\`

This structure emphasizes separation of concerns and modularity. The components directory follows atomic design principles, separating reusable common components from feature-specific ones. The hooks directory contains custom hooks that encapsulate reusable logic, while the store manages global state using Redux Toolkit.

## Component Architecture

### 1. Common Components
Building reusable components with proper TypeScript typing and composition patterns is crucial for maintaining consistency across the application. Here's an example of a well-structured button component:

\`\`\`tsx
// components/common/Button/Button.tsx
import { forwardRef, ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white hover:bg-primary/90',
        secondary: 'bg-secondary text-white hover:bg-secondary/90',
        outline: 'border border-input bg-background hover:bg-accent',
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-10 px-4',
        lg: 'h-11 px-8 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="mr-2">
            <Spinner size="sm" />
          </span>
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export { Button, buttonVariants };
\`\`\`

This button component demonstrates several important concepts:
- Type-safe props using TypeScript
- Variant-based styling using class-variance-authority
- Loading state handling
- Proper forwarding of refs
- Accessibility considerations
- Consistent styling patterns

### 2. Feature Components
Feature components combine multiple common components and implement specific business logic. Here's an example of a well-structured authentication form:

\`\`\`tsx
// components/features/auth/LoginForm.tsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch } from '@/store/hooks';
import { login } from '@/store/slices/authSlice';
import { LoginSchema } from '@/validations/auth';
import type { LoginCredentials } from '@/types';

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const [error, setError] = useState<string | null>(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginCredentials>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = async (data: LoginCredentials) => {
    try {
      setError(null);
      await dispatch(login(data)).unwrap();
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        {...register('email')}
        type="email"
        label="Email"
        error={errors.email?.message}
      />
      <Input
        {...register('password')}
        type="password"
        label="Password"
        error={errors.password?.message}
      />
      {error && (
        <Alert variant="error">{error}</Alert>
      )}
      <Button type="submit" isLoading={isSubmitting}>
        Sign In
      </Button>
    </form>
  );
};
\`\`\`

This form component showcases:
- Integration with React Hook Form
- Zod schema validation
- Redux state management
- Error handling
- Loading states
- Proper TypeScript typing
- Reusable component composition

### 3. Custom Hooks
Custom hooks help extract and share complex logic between components. Here's an example of a pagination hook:

\`\`\`tsx
// hooks/usePagination.ts
import { useState, useMemo } from 'react';

interface UsePaginationProps {
  totalItems: number;
  itemsPerPage: number;
  initialPage?: number;
}

export const usePagination = ({
  totalItems,
  itemsPerPage,
  initialPage = 1,
}: UsePaginationProps) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const pageItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return { start, end };
  }, [currentPage, itemsPerPage]);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return {
    currentPage,
    totalPages,
    pageItems,
    goToPage,
    nextPage: () => goToPage(currentPage + 1),
    prevPage: () => goToPage(currentPage - 1),
    isFirstPage: currentPage === 1,
    isLastPage: currentPage === totalPages,
  };
};
\`\`\`

This hook demonstrates:
- Proper TypeScript interfaces
- Memoization for performance
- Encapsulated state management
- Reusable pagination logic
- Clear API design

## Performance Optimization

### 1. Code Splitting
Implement route-based code splitting to reduce the initial bundle size:

\`\`\`tsx
// App.tsx
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoadingSpinner } from '@/components/common';

const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Profile = lazy(() => import('@/pages/Profile'));
const Settings = lazy(() => import('@/pages/Settings'));

export const App = () => (
  <Suspense fallback={<LoadingSpinner />}>
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  </Suspense>
);
\`\`\`

### 2. Memoization
Use React.memo and useMemo wisely to prevent unnecessary re-renders:

\`\`\`tsx
// components/features/dashboard/ExpensiveChart.tsx
import { memo, useMemo } from 'react';
import { Chart } from 'chart.js';

interface ChartProps {
  data: ChartData;
  options?: ChartOptions;
}

export const ExpensiveChart = memo(({ data, options }: ChartProps) => {
  const chartData = useMemo(() => processChartData(data), [data]);
  const chartOptions = useMemo(
    () => ({
      ...defaultOptions,
      ...options,
    }),
    [options]
  );

  return <Chart data={chartData} options={chartOptions} />;
});

ExpensiveChart.displayName = 'ExpensiveChart';
\`\`\`

## Testing Strategy

### 1. Component Testing
Write comprehensive tests for components:

\`\`\`tsx
// components/common/Button/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('displays loading state correctly', () => {
    render(<Button isLoading>Submit</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});
\`\`\`

## Best Practices

1. **State Management**
   - Use Redux Toolkit for complex state
   - Implement proper data normalization
   - Use React Query for server state
   - Consider local state when appropriate

2. **Performance**
   - Implement proper code splitting
   - Use React.memo wisely
   - Optimize bundle size
   - Use proper loading states
   - Implement proper caching

3. **Testing**
   - Write comprehensive unit tests
   - Implement integration testing
   - Use E2E testing for critical flows
   - Test accessibility

4. **Code Quality**
   - Use TypeScript strictly
   - Implement proper error boundaries
   - Follow consistent coding standards
   - Use ESLint and Prettier

5. **Security**
   - Implement proper authentication
   - Handle sensitive data carefully
   - Sanitize user input
   - Use security headers
    `
  },
];
